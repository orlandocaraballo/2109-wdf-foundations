class Character {
  constructor(character, fontName, fontSize) {
    this.character = character;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }

  drawCharacter() {
    return this.character;
  }
}

class Letter extends Character {
  constructor(character, fontName, fontSize, charCase) {
    super(character, fontName, fontSize);
    this.charCase = charCase;
  }

  toLowerCase() {
    this.character = this.character.toLowerCase();
    this.charCase = "lowerCase";
  }

  toUpperCase() {
    this.character = this.character.toUpperCase();
    this.charCase = "upperCase";
  }

  getCase() {
    return this.charCase;
  }
}
