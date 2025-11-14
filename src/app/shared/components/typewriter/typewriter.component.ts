import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss'
})
export class TypewriterComponent {

  @Input() texts: string[] = [];
  @Input() typingSpeed: number = 80;   // ms per character
  @Input() deleteSpeed: number = 40;   // ms per character
  @Input() pauseTime: number = 1500;   // ms after full text

  currentText = '';
  private phaseIndex = 0;

  ngOnInit() {
    this.startTyping();
  }

  private async startTyping() {
    while (true) {
      const fullText = this.texts[this.phaseIndex];

      // Tipp-Phase
      for (let i = 0; i <= fullText.length; i++) {
        this.currentText = fullText.slice(0, i);
        await this.wait(this.typingSpeed);
      }

      await this.wait(this.pauseTime);

      // Lösch-Phase
      for (let i = fullText.length; i >= 0; i--) {
        this.currentText = fullText.slice(0, i);
        await this.wait(this.deleteSpeed);
      }

      // nächste Phase
      this.phaseIndex = (this.phaseIndex + 1) % this.texts.length;
    }
  }

  private wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


