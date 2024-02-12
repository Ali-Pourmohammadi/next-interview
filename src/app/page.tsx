export default function Home() {
  return (
    <main>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              style={{
                lineHeight: "1.5",
              }}
              className="text-2xl font-bold tracking-tight text-white leading-10 sm:text-6xl"
            >
              تست برنامه نویسی فرانت با React 18 & Nextjs 14
            </h2>
            <p className="mt-6 text-2xl leading-10 text-gray-300">
              لطفا سوال های زیر را در همین پروژه پیاده سازی کنید و تحویل دهید
            </p>
            <p className="mt-6 text-lg leading-10 text-gray-300">
              کامپوننت هایی که ایجاد میکنید در همین صفحه import کنید و زیر سوال نمایش دهید
            </p>
            <p className="mt-6 text-lg leading-10 text-gray-300">
              برای استایل دهی میتوانید از فایل global.css یا inline-css یا tailwind و یا هر روش دیگری که بلد هستید
              استفاده کنید
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-10 text-white">
          <Question
            questionNumber={1}
            question={`یک کامپوننت به نام Counter ایجاد کنید که دو دکمه داشته باشد که با زدن دکمه + یک عدد به شمارنده اضافه و با زدن دکمه - یک عدد کم کند و اگر آن عدد ضریب 5 بود در کنسول یک پیغامی را نمایش دهد`}
          />
          <Question
            questionNumber={2}
            question={`یک هدر (NavBar) طراحی کنید که یک لوگو داشته باشد که به صفحه اصلی لینک می شود . یک منو که به صفحه درباره ما (صفحه درباره ما ایجاد شود). یک منو به نام گالری تصاویر (صفحه گالری ایجاد شود) و منو ها به صفحه خودشان لینک شوند. یک لوگو درون پوشه پابلیک قرار دارد. در نهایت هدر در تمام صفحات نمایش داده شوند`}
          />
          <Question
            questionNumber={3}
            question={`درون صفحه گالری تصاویر این آدرس را Fetch کنید https://jsonplaceholder.typicode.com/albums/1/photos  و به صورت گالری تصاویر نمایش دهید و با کلیک بر روی هر تصویر سایز بزرگ آن در یک تب جدید نمایش داده شود`}
          />
          <Question
            questionNumber={4}
            question={`یک image Slider با هر کتابخانه و روشی که دوست دارید بسازید چند تصویر داخل پوشه public/slider وجود دارد که آن تصاویر را درون اسلایدر نمایش دهید. اسلایدر باید قابلیت swipe با انگشت و قابلیت auto slide داشته باشد که به صورت خودکار به تصویر بعد برود`}
          />
          <Question questionNumber={2} question={``} />
          <Question questionNumber={2} question={``} />
        </div>
      </div>
    </main>
  );
}

interface QuestionProps {
  questionNumber: number;
  question: string;
}

const Question = ({ questionNumber, question }: QuestionProps) => {
  return (
    <div>
      <h2 className="m-5">سوال {questionNumber}:</h2>
      <p className="m-5">{question}</p>
    </div>
  );
};
