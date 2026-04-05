class PixelCarousel {
  constructor(el) {
    this.el = el;
    this.track = el.querySelector('.carousel__track');
    this.items = el.querySelectorAll('.carousel__item');
    this.prev = el.querySelector('.carousel__btn--prev');
    this.next = el.querySelector('.carousel__btn--next');
    this.current = 0;
    this.total = this.items.length;
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
    this.init();
  }

  init() {
    this.prev?.addEventListener('click', () => this.go(this.current - 1));
    this.next?.addEventListener('click', () => this.go(this.current + 1));
    this.track.addEventListener('pointerdown', e => this.onDragStart(e));
    this.track.addEventListener('pointermove', e => this.onDragMove(e));
    this.track.addEventListener('pointerup', e => this.onDragEnd(e));
    this.update();
  }

  go(index) {
    this.current = Math.max(0, Math.min(index, this.total - 1));
    this.update();
  }

  update() {
    this.items.forEach((item, i) => item.classList.toggle('is-active', i === this.current));
    const offset = this.current * (100 / this.total);
    this.track.style.transform = `translateX(-${offset}%)`;
    if (this.prev) this.prev.disabled = this.current === 0;
    if (this.next) this.next.disabled = this.current === this.total - 1;
  }

  onDragStart(e) { this.isDragging = true; this.startX = e.clientX; this.track.setPointerCapture(e.pointerId); }
  onDragMove(e) { if (this.isDragging) this.currentX = e.clientX - this.startX; }
  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    if (this.currentX < -60) this.go(this.current + 1);
    else if (this.currentX > 60) this.go(this.current - 1);
    this.currentX = 0;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-carousel]').forEach(el => new PixelCarousel(el));
});
