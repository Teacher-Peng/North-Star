'use strict';

function startFamilyLogin() {
  const form = document.querySelector('#familyLoginForm');
  const input = document.querySelector('#familyAccessCode');
  const toggle = document.querySelector('#toggleFamilyCode');
  const submit = document.querySelector('#familyLoginSubmit');
  toggle.hidden = false;
  toggle.addEventListener('click', function toggleVisibility() {
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    toggle.textContent = visible ? '隱藏存取碼' : '顯示存取碼';
    toggle.setAttribute('aria-pressed', String(visible));
  });
  form.addEventListener('submit', function submitCode() {
    input.type = 'password';
    submit.disabled = true;
    document.querySelector('#familyLoginMessage').textContent = '正在確認家庭使用權限……';
  });
  window.addEventListener('pageshow', function resetSubmission() {
    input.value = '';
    input.type = 'password';
    toggle.textContent = '顯示存取碼';
    toggle.setAttribute('aria-pressed', 'false');
    submit.disabled = false;
  });
}

startFamilyLogin();
