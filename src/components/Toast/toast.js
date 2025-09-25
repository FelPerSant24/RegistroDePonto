const toastContainer = document.querySelector(".toast-container");
if (!toastContainer) {
  const newContainer = document.createElement("div");
  newContainer.className = "toast-container";
  document.body.appendChild(newContainer);
}

export function showToast(message, type, duration = 2000) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const msg = document.createElement('span');
  msg.className = 'message';
  msg.textContent = message;

  toast.appendChild(msg);

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');

    setTimeout(() => {
      toast.remove();
    }, 400); 
  }, duration);
}
