import { USER } from './mock-user';
import { RAIDS, BOSSES } from './mock-raid';
import { ARTICLES } from './mock-articles';
import { CHARACTERS } from './mock-characters';

export class OfflineData {
  createDb(){
    return{
      'user': USER,
      'articles': ARTICLES,
      'raids': RAIDS,
      'bosses': BOSSES,
      'characters': CHARACTERS
    }
  }
}
