const aspectsOfLife = ["career", "love", "health", "finances", "relationships", "family", "travel", "education", "creativity", "personal growth", "social life", "spirituality"];
const zodiacs = ["an Aries", "a Taurus", "a Gemini", "a Cancer", "a Leo", "a Virgo", "a Libra", "a Scorpio", "a Sagittarius", "a Capricorn", "an Aquarius", "a Pisces"];
const challenges = ["communication challenges", "unexpected delays", "emotional turbulence", "conflicting opinions", "misunderstandings", "financial strain", "a loss of focus", "temptations to procrastinate", "trust issues", "time management struggles", "a clash of ideas", "burnout or exhaustion"];

const generateMessage = () => {
    let randomNum1 = Math.floor(Math.random() * 12);
    let randomNum2 = Math.floor(Math.random() * 12);
    let randomNum3 = Math.floor(Math.random() * 12);

    console.log(`Today, the stars align in your favor, bringing you unexpected opportunities in your ${aspectsOfLife[randomNum1]}. As ${zodiacs[randomNum2]}, trust your instincts and embrace the changes coming your way. Be cautious of ${challenges[randomNum3]}, but know that you have the strength to overcome it.`)
}

generateMessage()
