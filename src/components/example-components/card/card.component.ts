import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent as UiCardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-card-example',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [CommonModule, UiCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  // Story data
  card1 = {
    imageUrl: 'https://picsum.photos/400/200',
    category: 'Case Study',
    title: 'Finding customers for your new business',
    description:
      'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.',
    buttonText: 'Read More',
  };

  card2 = {
    imageUrl: 'https://picsum.photos/400/201',
    category: 'Technology',
    title: 'The Future of Web Development',
    description:
      'Exploring the latest trends and technologies shaping the future of the web.',
    buttonText: 'Learn More',
  };

  card3 = {
    imageUrl: 'https://picsum.photos/400/202',
    title: 'Minimal Card',
    description: 'This is a card with only a title and description.',
  };
}