import express from "express"
import bodyParser from "body-parser";

const app=express();
var no,qs=[], opt_q=[], opt=[], cor_ans=[], answer=[],score=0,final=0;
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>
{
  res.render("index1.ejs");
})
var i=0;
app.post("/no",(req,res)=>
{
  no=req.body["noqs"];
  console.log(no)
  res.render("index2.ejs",{no:no}); 
  
})

app.post("/submitqs",(req,res)=>
{   
    i++;
    qs.push(req.body["q"])
    opt_q.push(req.body["optA"])
    opt_q.push(req.body["optB"])
    opt_q.push(req.body["optC"])
    opt_q.push(req.body["optD"])
    opt.push(opt_q);
    cor_ans.push(req.body["ans"])
    opt_q=[];
    console.log(cor_ans);
    console.log(opt);
    if(i==no)
    {
      res.render("qs.ejs",{no:no,qs:qs,opt:opt})
    }
});

app.post("/submitans",(req,res)=>
{
  answer.push(req.body["ans"])
  console.log(answer)
  final++;
  if (final==no)
{
  for(let i=0;i<no;i++)
  {
    if(cor_ans[i]===answer[i])
    score++;
  }
    res.render("score.ejs",{score:score});
}
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

