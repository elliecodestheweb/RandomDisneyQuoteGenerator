var quotes = [
    '"If you can dream it, you can do it." - Walt Disney', '"Just keep swimming!" - Finding Nemo', 
    ' "The flower that blooms in adversity is the most rare and beautiful of all." - Mulan', 
    ' "You’re braver than you believe, stronger than you seem, and smarter than you think." - Winnie the Pooh', 
    ' "A true hero isn’t measured by the size of his strength, but by the strength of his heart." - Hercules', 
    ' "If you focus on what you left behind, you will never see what lies ahead." - Ratatouille', 
    ' "Open different doors, you may find a you there that you never knew was yours. Anything can happen." - Mary Poppins', 
    ' "Look inside yourself. You are more than what you have become." - The Lion King', 
    ' "The very things that hold you down are going to lift you up." - Dumbo', 
    ' "You control your destiny. You don’t need magic to do it. And there are no magical shortcuts to solving your problems." - Brave', 
    '"The problem is not the problem. The problem is your attitude about the problem." - Pirates of the Caribbean', 
    '"Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it." - The Lion King', 
    '"Remember, you’re the one who can fill the world with sunshine." - Snow White and the Seven Dwarves', 
    '"All our dreams can come true, if we have the courage to pursue them." - Walt Disney', 
    ' "The way to get started is to quit talking and begin doing" - Walt Disney', '“Get a good idea and stay with it. Do it, and work at it until it’s done right.” Walt Disney', 
    '"First, think. Second, believe. Third, dream. And finally, dare." – Walt Disney', 
    '“You must not let anyone define your limits because of where you come from. Your only limit is your soul.” – Ratatouille', 
    '"We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths." - Walt Disney'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
