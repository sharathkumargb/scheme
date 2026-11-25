(() => {
const $ = id => document.getElementById(id);
const branch=$("branchSelect"), semester=$("semesterSelect"), subjectList=$("subjectList"), detail=$("subjectDetail");
$("year").textContent=new Date().getFullYear();
$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
$("themeToggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("cws-theme",document.body.classList.contains("dark")?"dark":"light")});
if(localStorage.getItem("cws-theme")==="dark")document.body.classList.add("dark");
function populateSemesters(){semester.innerHTML="";for(let i=1;i<=8;i++){let o=document.createElement("option");o.value=i;o.textContent=`Semester ${i}`;semester.append(o)}}
function currentSubjects(){
 const b=branch.value,s=semester.value;
 if(s==="3")return (window.COMMON_SEM3||[]).map(x=>({...x}));
 return [];
}
function renderSubjects(){
 const s=semester.value, b=branch.value, data=currentSubjects();
 subjectList.innerHTML="";
 if(s!=="3"){subjectList.innerHTML=`<div class="pending-box">Semester ${s} ${b} syllabus is pending. Upload the official VTU 2025 PDF to populate exact subject codes, modules and topics.</div>`;detail.innerHTML='<div class="empty-state"><div class="empty-icon">⌁</div><h3>Content pending</h3><p>This semester is intentionally not filled with guessed syllabus information.</p></div>';return}
 if(b==="AIML"){subjectList.innerHTML='<div class="pending-box">AI&ML Semester 3 is enabled as requested. The common subjects below are a working mapping; verify each against the official AI&ML PDF before publishing as identical.</div>'}
 data.forEach((sub,i)=>{let btn=document.createElement("button");btn.className="subject-button";btn.innerHTML=`${sub.name}<small>${sub.code} · ${sub.credits||"Credits not listed"}</small>`;btn.addEventListener("click",()=>showSubject(sub,btn));subjectList.append(btn);if(i===0)btn.click()});
}
function showSubject(sub,btn){
 document.querySelectorAll(".subject-button").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 const modules=sub.modules||[];
 let html=`<h3>${sub.name}</h3><div class="subject-meta">${sub.code} · ${sub.category||""} · <span class="${sub.verified?"status verified":"status"}">${sub.verified?"Source extracted":"Verification required"}</span></div>`;
 if(sub.pendingModules||!modules.length)html+='<div class="pending-box">Module details are pending complete source verification. No invented module topics are shown. Add the official course pages to this data file.</div>';
 modules.forEach((m,i)=>{html+=`<details class="module" ${i===0?"open":""}><summary>${m.title}</summary><div class="module-content"><ol class="topic-list">${m.topics.map(t=>`<li>${escapeHtml(t)}</li>`).join("")}</ol><p><a class="btn ghost" href="questions.html?subject=${encodeURIComponent(sub.code)}">View question analysis →</a></p></div></details>`});
 detail.innerHTML=html;
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
branch.addEventListener("change",renderSubjects);semester.addEventListener("change",renderSubjects);populateSemesters();semester.value="3";renderSubjects();
})();