import{_ as a,o as r,c,a as e,w as i,v as m}from"./index.a3b231e4.js";const n="http://45.56.71.218:8080/contacts",h={props:{id:String},created(){fetch(n+"/"+this.id,{method:"GET",headers:{"Content-Type":"application/json"}}).then(s=>s.json()).then(s=>{this.firstName=s.firstName,this.lastName=s.lastName,this.middleName=s.middleName,this.email=s.email,this.mobileNumber=s.mobileNumber}).catch(s=>{alert(s),this.firstName="",this.lastName="",this.middleName="",this.email="",this.mobileNumber=""})},data(){return{firstName:"Loading...",lastName:"Loading...",middleName:"Loading...",email:"Loading...",mobileNumber:"Loading..."}},methods:{doSave(){fetch(n+"/"+this.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:this.firstName,lastName:this.lastName,middleName:this.middleName,email:this.email,mobileNumber:this.mobileNumber})}).then(function(s){s.status!=200||alert("Saved")})}}},u={class:"container"},p={class:"row"},N={class:"col-md-6"},_={class:"col-md-6"},b=e("br",null,null,-1),f={class:"row"},v={class:"col-md-6"},y=e("div",{class:"col-md-6"},null,-1),x=e("br",null,null,-1),U={class:"row"},g={class:"col-md-6"},w={class:"col-md-6"},L=e("br",null,null,-1),S={class:"row"},V={class:"col-md-6"},T=e("div",{class:"col-md-6"},null,-1);function j(s,t,k,B,o,d){return r(),c("div",u,[e("div",p,[e("div",N,[i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=l=>o.firstName=l),placeholder:"First name"},null,512),[[m,o.firstName]])]),e("div",_,[i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=l=>o.lastName=l),placeholder:"Last name"},null,512),[[m,o.lastName]])])]),b,e("div",f,[e("div",v,[i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=l=>o.middleName=l),placeholder:"Middle name"},null,512),[[m,o.middleName]])]),y]),x,e("div",U,[e("div",g,[i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=l=>o.email=l),placeholder:"Email Address"},null,512),[[m,o.email]])]),e("div",w,[i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=l=>o.mobileNumber=l),placeholder:"Mobile Number"},null,512),[[m,o.mobileNumber]])])]),L,e("div",S,[e("div",V,[e("button",{onClick:t[5]||(t[5]=(...l)=>d.doSave&&d.doSave(...l)),class:"btn btn-primary"},"Save")]),T])])}var E=a(h,[["render",j]]);export{E as default};
