(function() {
  // Ellenőrizzük, van-e már döntés
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days*24*60*60*1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  if (getCookie("cookie_consent")) return; // már döntött a felhasználó

  // Banner létrehozása
  const banner = document.createElement("div");
  banner.style.position = "fixed";
  banner.style.bottom = "20px";
  banner.style.left = "20px";
  banner.style.right = "20px";
  banner.style.maxWidth = "600px";
  banner.style.margin = "auto";
  banner.style.background = "#fff";
  banner.style.padding = "15px";
  banner.style.borderRadius = "12px";
  banner.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
  banner.style.fontFamily = "sans-serif";
  banner.style.textAlign = "center";
  banner.style.zIndex = "9999";

  banner.innerHTML = `
    <p style="margin:0 0 10px 0; font-size:14px;">
      Ez a webhely sütiket használ a jobb felhasználói élmény érdekében. 
      <a href="/cookie-policy" style="color:#1a73e8;text-decoration:none;" target="_blank">További információ</a>
    </p>
    <button id="accept-cookies" style="background:#1a73e8;color:white;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:14px;margin-right:10px;">Elfogadom</button>
    <button id="decline-cookies" style="background:#ccc;color:#333;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:14px;">Elutasítom</button>
  `;

  document.body.appendChild(banner);

  document.getElementById("accept-cookies").addEventListener("click", function() {
    setCookie("cookie_consent", "accepted", 365);
    banner.style.display = "none";
    // ide jöhetnek a script-ek, pl. Google Analytics aktiválása
    // pl.: loadAnalytics();
  });

  document.getElementById("decline-cookies").addEventListener("click", function() {
    setCookie("cookie_consent", "declined", 365);
    banner.style.display = "none";
  });
})();
C 