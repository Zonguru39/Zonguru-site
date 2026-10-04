const fs=require("fs");
const path=require("path");
const root=path.resolve(__dirname,"..");
const www=path.join(root,"www");
if(fs.existsSync(www))fs.rmSync(www,{recursive:true,force:true});
fs.mkdirSync(www,{recursive:true});
for(const name of fs.readdirSync(root)){
  if(["www","node_modules",".git",".github","android","ios"].includes(name))continue;
  const src=path.join(root,name);
  const dst=path.join(www,name);
  if(fs.statSync(src).isFile() && /\.(html|css|js|json|svg|png|jpg|jpeg|webp|ico|webmanifest)$/i.test(name))fs.copyFileSync(src,dst);
}
console.log("Prepared Capacitor web assets in www/");
