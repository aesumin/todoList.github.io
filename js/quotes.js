const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에는 지구를 한바퀴 돌 수 있다",
        author: "Samuel Johnson",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 한다",
        author: "Charlie Chaplin",
    },
    {
        quote: "신은 용기있는 자를 결코 버리지 않는다",
        author: "Kenler",
    },
    {
        quote: "피할 수 없으면 즐겨라",
        author: "Robert Elliott",
    },
    {
        quote: "한 번의 실패와 영원한 실패를 혼동하지 마라",
        author: "F.Scott Fitzgerald",
    },
    {
        quote: "내일은 내일의 태양이 뜬다",
        author: "Margaret Mitchell",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author: "André Malraux",
    },
    {
        quote: "행복은 습관이다, 그것을 몸에 지녀라",
        author: "Hubbard",
    },
    {
        quote: "계단을 밟아야 계단을 올라갈 수 있다",
        author: "Turkish proverb",
    },
    {
        quote: "성공의 비결은 단 한가지, 잘 할 수 있는 일에 광적으로 집중하는 것이다",
        author: "tom monagan",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "Charles Darwin",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라, 그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "James Dean",
    },
    {
        quote: "1%의 가능성, 그것이 나의 길이다",
        author: "Napoleon",
    },
    {
        quote: "고통이 남기고 난 뒤를 보라! 고난이 지나면 반드시 기쁘이 스며든다",
        author: "Goethe",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다, 반드시 실천해야 한다",
        author: "이소룡",
    },
    {
        quote: "사막이 아름다운 것은 어딘가에 오아시스가 있기 때문이다",
        author: "Saint-Exupéry",
    },
    {
        quote: "행복의 한쪽 문이 닫히면, 다른 쪽 문이 열린다",
        author: "Helen Keller",
    },
    {
        quote: "그대 하루하루를 그대 마지막 날이라고 생각하라",
        author: "Horace",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author: "Goethe",
    },
    {
        quote: "자신을 내보여라, 그러면 재능이 드러날 것이다",
        author: "Balthasar Gracian",
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라",
        author: "P. Sirus",
    },
    {
        quote: "내 비장의 무기는 아직 손안에 있다, 그것은 희망이다",
        author: "Napoleon",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
