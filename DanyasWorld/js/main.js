/**
 * Danya's World — Main Interaction Scripts
 * Accessible navigation, mobile drawer handling, active link detection,
 * and certificate credential lightbox.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  highlightActiveNavLink();
  initCertModal();
  initCrossSitePortal();
});

/**
 * Cross-Site Portal: Links local dev port (8080 -> 8085) or preserves relative paths on static hosts
 */
function initCrossSitePortal() {
  const btn = document.getElementById('btn-to-danya-builds');
  if (btn && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    if (window.location.pathname.includes('/DanyasWorld/')) {
      return;
    }
    btn.href = 'http://localhost:8085/index.html';
  }
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.site-nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close when clicking a nav link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Automatically set active state on matching navigation link
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.site-nav-menu .nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Certificate Lightbox Modal
 * Allows evaluators to click any certificate to inspect credentials in full resolution.
 */
function initCertModal() {
  const certItems = document.querySelectorAll('.cert-attachment');
  const collageItems = document.querySelectorAll('.collage-card');
  const photoItems = document.querySelectorAll('.photo-card');
  if (!certItems.length && !collageItems.length && !photoItems.length) return;

  // Create singleton dialog element if not already present
  let dialog = document.querySelector('.cert-dialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.className = 'cert-dialog';
    dialog.innerHTML = `
      <div class="cert-dialog-header">
        <h3 class="cert-dialog-title">Credential Verification</h3>
        <button type="button" class="cert-dialog-close" aria-label="Close modal">&times;</button>
      </div>
      <div class="cert-dialog-body">
        <img src="" alt="Full resolution view">
      </div>
    `;
    document.body.appendChild(dialog);

    const closeBtn = dialog.querySelector('.cert-dialog-close');
    closeBtn.addEventListener('click', () => dialog.close());

    // Close when clicking the backdrop
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  }

  const dialogImg = dialog.querySelector('.cert-dialog-body img');
  const dialogTitle = dialog.querySelector('.cert-dialog-title');

  certItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = item.getAttribute('data-cert-src') || item.querySelector('img')?.src;
      const titleText = item.getAttribute('data-cert-title') || item.querySelector('.cert-sub')?.textContent || 'Credential Verification';
      
      if (imgSrc) {
        dialogImg.src = imgSrc;
        dialogImg.alt = titleText;
        dialogTitle.textContent = titleText;
        dialog.showModal();
      }
    });
  });

  collageItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && img.src) {
        dialogImg.src = img.src;
        dialogImg.alt = img.alt || 'Family photograph';
        dialogTitle.textContent = 'Family Photograph';
        dialog.showModal();
      }
    });
  });

  photoItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('a, button, video')) return;
      const img = item.querySelector('img');
      const imgSrc = item.getAttribute('data-photo-src') || img?.src;
      const titleText = item.getAttribute('data-photo-title') || item.querySelector('.multimedia-card-title')?.textContent || 'Photograph View';
      
      if (imgSrc) {
        dialogImg.src = imgSrc;
        dialogImg.alt = titleText;
        dialogTitle.textContent = titleText;
        dialog.showModal();
      }
    });
  });
}
