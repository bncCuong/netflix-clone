import { Answer } from '.';
import { Button } from '@/utils';

type Question = {
    id: string;
    ques: string;
    answer: string;
};

const question: Question[] = [
    {
        id: 'q1',
        ques: 'What is Netflix?',
        answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!`,
    },
    {
        id: 'q2',
        ques: 'How much does Netflix cost?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts. ',
    },
    {
        id: 'q3',
        ques: 'Where can i watch?',
        answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you"re on the go and without an internet connection. Take Netflix with you anywhere.',
    },
    {
        id: 'q4',
        ques: 'How do i cancel?',
        answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
        id: 'q5',
        ques: 'What can i watch on Netflix?',
        answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
        id: 'q6',
        ques: 'Is Netflix good for kids?',
        answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    },
];

export const Question = () => {
    return (
        <div className="py-[100px] text-textColor text-center flex-col items-center">
            <h1 className="lg:text-5xl text-3xl lg:py-0 py-6 font-bold mb-10 ">Frequently Asked Questions</h1>
            <ul className="w-[100%] ">
                {question.map((item) => (
                    <Answer key={item.id} id={item.id} answer={item.answer} ques={item.ques} />
                ))}
            </ul>

            <div className="mt-14 flex-col items-center justify-center">
                <h1 className="text-xl my-6">
                    Ready to watch? Enter your email to create or restart your memebership.
                </h1>
                <div className=" sm:flex gap-2 items-center justify-center ">
                    <div className="w-[380px] lg:w-[400px]">
                        <input
                            placeholder="Email address"
                            className="sm:ml-0 ml-20 placeholder:text-white/70 w-[100%] h-[56px] outline-none border border-1 px-3 border-gray-600/80 rounded-md bg-black/40"
                        />
                    </div>
                    <div className="mt-6 sm:mt-0 ml-[33%] sm:ml-0 ">
                        <Button className="" medium={true}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
