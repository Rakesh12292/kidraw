import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;
  private selectedColor = '#000000'; 
  private lineWidth = 5; 
  private lastTime = 0;
  private isDrawing = false;
  private lastX = 0;
  private lastY = 0;
   alphabetImages = [
    'assets/alphabet/A.png',
    'assets/alphabet/B.png',
    'assets/alphabet/C.png',
    'assets/alphabet/D.png',];
  currentImageIndex: number = 0;
  currentImage: string = '';
  constructor() {
    this.currentImage = this.alphabetImages[this.currentImageIndex];
  }

  ngAfterViewInit() {
    this.canvas.nativeElement.width = window.innerWidth/2 ;
    this.canvas.nativeElement.height = window.innerHeight - 56;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.strokeStyle = this.selectedColor;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = 'round'; 
    this.ctx.lineJoin = 'round'; 
    this.setupCanvas();
  }

  setupCanvas() {
    this.canvas.nativeElement.addEventListener('mousedown', this.startDrawing.bind(this));
    this.canvas.nativeElement.addEventListener('mouseup', this.stopDrawing.bind(this));
    this.canvas.nativeElement.addEventListener('mousemove', this.draw.bind(this));
    this.canvas.nativeElement.addEventListener('touchstart', this.startDrawing.bind(this));
    this.canvas.nativeElement.addEventListener('touchend', this.stopDrawing.bind(this));
    this.canvas.nativeElement.addEventListener('touchmove', this.draw.bind(this));
  }

  startDrawing(event: MouseEvent | TouchEvent) {
    this.drawing = true;
    const { x, y } = this.getEventCoordinates(event);
    this.lastX = x;
    this.lastY = y;
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
  }

  stopDrawing() {
    this.drawing = false;
    this.ctx.closePath();
  }

  draw(event: MouseEvent | TouchEvent) {
    if (!this.drawing) return;
    const currentTime = new Date().getTime();
    event.preventDefault();
    const { x, y } = this.getEventCoordinates(event);

    requestAnimationFrame(() => {
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.lastX = x;
      this.lastY = y;
    });
  }

  getEventCoordinates(event: MouseEvent | TouchEvent): { x: number; y: number } {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    if (event instanceof MouseEvent) {
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    } else {
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      };
    }
  }


  getX(event: MouseEvent | TouchEvent): number {
    if (event instanceof MouseEvent) {
      return event.offsetX;
    } else if (event instanceof TouchEvent && event.touches.length == 1) {
      return event.touches[0].clientX - this.canvas.nativeElement.getBoundingClientRect().left;
    }
    return 0;
  }
  
  getY(event: MouseEvent | TouchEvent): number {
    if (event instanceof MouseEvent) {
      return event.offsetY;
    } else if (event instanceof TouchEvent && event.touches.length == 1) {
      return event.touches[0].clientY - this.canvas.nativeElement.getBoundingClientRect().top;
    }
    return 0;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  changeColor(event: any) {
    this.selectedColor = event.target.value;
    this.ctx.strokeStyle = this.selectedColor;
  }

  changeLineWidth(event: any) {
    this.lineWidth = event.target.value;
    this.ctx.lineWidth = this.lineWidth;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.alphabetImages.length;
    this.currentImage = this.alphabetImages[this.currentImageIndex];
  }

  saveCanvas() {
    const dataURL = this.canvas.nativeElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.png';
    link.click();
  }

}
