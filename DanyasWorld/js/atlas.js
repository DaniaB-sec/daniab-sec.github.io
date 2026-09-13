/**
 * Danya's World — Atlas Interaction
 * Subtle and clean hover effects, keeping the map immediately legible.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAtlasMap();
});

function initAtlasMap() {
  const regions = document.querySelectorAll('.atlas-region');
  if (!regions.length) return;

  // Enhance keyboard accessibility & subtle hover feedback
  regions.forEach(region => {
    region.addEventListener('mouseenter', () => {
      // Gentle subtle elevation without visual clutter
      region.style.zIndex = '5';
    });

    region.addEventListener('mouseleave', () => {
      region.style.zIndex = '2';
    });
  });
}
