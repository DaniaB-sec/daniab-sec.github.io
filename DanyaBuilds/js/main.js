/**
 * Danya Builds — Main Interaction Scripts
 * Accessible navigation, mobile drawer handling, active link detection,
 * and technical credential / media lightbox modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  highlightActiveNavLink();
  initCertModal();
  initCrossSitePortal();
});

/**
 * Cross-Site Portal: Links local dev port (8085 -> 8080) or preserves relative paths on static hosts
 */
function initCrossSitePortal() {
  const btn = document.getElementById('btn-to-danyas-world');
  if (btn && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    btn.href = 'http://localhost:8080/index.html';
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
 * Credential / Architecture Diagram Lightbox Modal
 * Allows evaluators and visitors to inspect certifications, blueprints, and diagrams in full resolution.
 */
function initCertModal() {
  const certItems = document.querySelectorAll('.cert-attachment, .diagram-card, .photo-card');
  if (!certItems.length) return;

  let dialog = document.querySelector('.cert-dialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.className = 'cert-dialog';
    dialog.innerHTML = `
      <div class="cert-dialog-header">
        <h3 class="cert-dialog-title">Technical Inspection</h3>
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
      if (e.target.closest('a, button, video')) return;
      const img = item.querySelector('img');
      const imgSrc = item.getAttribute('data-cert-src') || item.getAttribute('data-photo-src') || img?.src;
      const titleText = item.getAttribute('data-cert-title') || item.getAttribute('data-photo-title') || item.querySelector('.story-card-title')?.textContent || 'Technical Inspection';
      
      if (imgSrc) {
        dialogImg.src = imgSrc;
        dialogImg.alt = titleText;
        dialogTitle.textContent = titleText;
        dialog.showModal();
      }
    });
  });
}
