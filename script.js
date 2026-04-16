const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeBtn");

document.getElementById("startBtn").onclick = () => {
  fetch("m.json")
    .then(res => res.json())
    .then(data => {
      modalBody.innerHTML = "<h2>请选择要进行的问卷：</h2>";
      data.tests.forEach(test => {
        const btn = document.createElement("button");
        btn.textContent = test.name;
        btn.onclick = () => { window.location.href = test.link; };
        modalBody.appendChild(btn);
      });
      modal.style.display = "block";
    });
};

document.getElementById("menuBtn").onclick = () => {
  fetch("m.json")
    .then(res => res.json())
    .then(data => {
      modalBody.innerHTML = "<h2>菜单</h2>";
      data.menu.forEach(item => {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.name;
        link.style.display = "block";
        modalBody.appendChild(link);
      });
      modal.style.display = "block";
    });
};

document.getElementById("noticeBtn").onclick = () => {
  modalBody.innerHTML = `
    <h2>注意事项</h2>
    <p>本测试从冒险精神、社交风格、战斗策略、情感模式、价值取向等维度出发，
    将你的人格与各个问卷中对应的游戏/动漫中的角色进行匹配。<br><br>
    测试结果仅供娱乐参考，请勿过度解读。<br>
    希望每一位参加问卷的人都能在现实找到属于自己的故事。</p>
  `;
  modal.style.display = "block";
};

closeBtn.onclick = () => { modal.style.display = "none"; };
window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; };
