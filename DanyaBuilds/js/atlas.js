/**
 * Danya Builds — Atlas Interaction
 * Subtle and clean hover effects for the technical atlas map.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAtlasMap();
});

function initAtlasMap() {
  const regions = document.querySelectorAll('.atlas-region');
  if (!regions.length) return;

  regions.forEach(region => {
    region.addEventListener('mouseenter', () => {
      region.style.zIndex = '5';
    });

    region.addEventListener('mouseleave', () => {
      region.style.zIndex = '2';
    });
  });
}
