import{u as d,j as e,L as n,s as r,B as c}from"./index-GwELm9KT.js";import{U as u,F as p}from"./useMyContext-WgulVUT-.js";import{C as h}from"./Characters-S85RFwTv.js";import"https://cdn.socket.io/4.4.1/socket.io.esm.min.js";import"./MyContext-PIqekm69.js";function N(){const{userData:a,changeUserData:s,resetUserData:l}=u(),x=d(),o=t=>{t.preventDefault(),r.connect(),r.emit("custom-room",a.roomCode,"create",(m,i)=>{m==="exits"&&(c.error(`Room already exits with roomid:${i}`,{position:"top-right",autoClose:5e3,hideProgressBar:!0}),l(),r.disconnect(),x("/"))}),x("/chat")};return e.jsxs("div",{children:[e.jsx("div",{className:"md:mx-20 my-4 mx-4",children:e.jsx(n,{to:"/",children:e.jsx(p,{className:"text-md sm:text-xl 2xl:text-2xl"})})}),e.jsx("div",{className:"sm:w-1/3 w-full  mx-auto sm:px-2 sm:py-4 p-4 px-8 sm:mt-0 mt-4",children:e.jsxs("form",{onSubmit:o,className:"flex flex-col gap-8 2xl:gap-10 ",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"font-bebas text-primary-dark dark:text-white text-lg sm:text-xl 2xl:text-3xl",children:"Enter Your Name"}),e.jsx("input",{required:!0,className:"border-b-2 border-primary-dark dark:px-2 dark:text-black border-opacity-25 outline-none 2xl:text-2xl",value:a.userName,onChange:t=>{s("userName",t.target.value)}})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"font-bebas text-primary-dark dark:text-white sm:text-xl text-lg 2xl:text-3xl",children:"select a character"}),e.jsx(h,{})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"font-bebas text-primary-dark dark:text-white  text-lg sm:text-xl 2xl:text-3xl",children:"Set Room code"}),e.jsx("input",{required:!0,className:"border-b-2 border-primary-dark dark:px-2 dark:text-black  border-opacity-25 outline-none 2xl:text-2xl",value:a.roomCode,onChange:t=>{s("roomCode",t.target.value)}})]}),e.jsx("button",{type:"submit",className:"py-2 px-4 2xl:py-4 2xl:px-8 bg-neutral-medium-gray sm:text-lg text-md 2xl:text-2xl rounded text-primary-dark w-24  2xl:w-36 font-inter",children:"Create"})]})}),e.jsx("p",{className:"font-chewy mt-12 2xl:mt-16 dark:text-red-100 transition-all duration-200 text-md sm:text-xl 2xl:text-3xl text-center text-accent-red-dark sm:w-1/3 w-2/3 mx-auto ",children:"Note:You can create a room with maximum of six users."})]})}export{N as default};
