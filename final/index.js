const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./server/models/User');
const {auth} = require('./server/middleware/auth');
const config = require('./server/config/key')

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI)
  .then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!'))

app.get('/api/hello', (req,res) => {
  res.send("안녕하세요~");
})

app.post('api/users/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success: true
    })
  })

})

app.post('api/users/login', (req,res) => {

  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user){
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
    user.comparePassword(req.body.passord, (err, isMatch) => {
      if(!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})
      
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        
        res.cookie("x_auth", user.token)
        .status(200)
        .json({loginSuccess: true, userId: user._id})
      })
    })
  })
})

app.get('/api/users/auth', auth , (req, res)=>{
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0?false:true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res)=>{
  User.findOneAndUpdate({ _id: req.user._id},
    {token : ""}
    , (err, user)=>{
      if(err)return res.json({success:false, err});
      return res.status(200).sned({
        success: true
      })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))