import Counter from "@/components/Counter";
import Answer from "@/components/answer";
import UserInfo from "@/components/userInfo";

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
          <div className="mx-auto  lg:mx-0">
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
            <p
              style={{
                direction: "rtl",
              }}
              className="mt-6 text-lg leading-10 text-gray-300"
            >
              برای تحویل تست میتوانید پروژه را بر روی گیت هاب قرار دهید و این نام کاربری را اضافه کنید: hamrah68 یا فایل
              پروژه را فشرده کنید و به این ایمیل ارسال کنید: hamrah68@gmail.com و یا لینک گیت هاب را به همین ایمیل آدرس
              ارسال کنید
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-10 text-white">
          <div>
            <p className="p-4 text-5xl font-bold">لطفا مشخصات خود را وارد کنید</p>
            <UserInfo fullName="<FullName>" email="<EMAIL>" phoneNumber="<phoneNumber>" />
          </div>
          <Question
            questionNumber={1}
            question={`تفاوت server side rendering و client side rendering را توضیح دهید و در چه مواقعی باید از هر کدام استفاده کرد و مزایای هر کدام را نام ببرید`}
          />
          <Answer>در این فریموورک ما میتوانیم کامپوننت هارا سمت سرور و  یا کلاینت اجرا کنیم به این ترتیب  که
            زمانی که میخواهیم یک سری عملیات مانند سرور اکشن ها . فچ دیتا را انجام دهیم.این عملیات سمت سرور انجام میشوند
            حال اگر نیاز بود کاربر با یک سری تعامل با کامپوننت ما داشته باشد نیاز است ان کامپوننت سمت کلاینت تعریف شود
            اما مزیت سرور رندرینگ این است که نیاز نیست باندل های JS سمت کلاینت کاربر دانلود شوند .بلکه سمت سرور اجرا شده و پاسخ به صورت HTML به سمت کاربر هدایت میشود که این باعث میشود تجربه کاربری خوبی احساس شود
          </Answer>
          <Question
            questionNumber={2}
            question={`ریداکس را توضیح دهید. کارایی بخش های مختلف آن را با ذکر مثال توضیح دهید`}
          />
          <Answer>ریداکس یک UI STATE Management است که میتوانیم با استفاده از ان  اطلاعات مورد نیاز را زخیره کنیم و هر کدام از دیتا ها را به سمت یک کامپوننت ارسال کنیم 
            این کار باعث می شود ما در پروژه خود  porp dirling نداشته باشیم
            اما redux یک قسمت slice دارد که در ان اطلاعات مربوط به هر بخش ذخیره میشود
            یک initalState دارد که در ان اطلاعات  اولیه تعریف میشوند 
            و انوع اکشن ها را دارد که متناسب با نیاز پروژه ما روی پروژه ما  با دیتا های ذخیره شده عملیلاتی را انجام می دهد
          </Answer>

          <Question questionNumber={3} question={`TypeScript چیست؟ مزایای ان را توضیح دهید`} />
          <Answer>تایپ اسکریپت یک زبان مبتنی بر جاوا اسکریپت هست که توسط مایکروسافت ارایه شده است به صورت خلاصه میتوان گفت تایپ اسکریپت برای کنترل ورودی و  مدیریت تایپ داده مفید است 
            به عنوان مثال در صورتی که ما یک فانکشن داشته باشیم که یک ورودی  id داشته باشد  با نوع عدد
            درصورتی که کاربر مقدار رشته وارد کند  دیباگر این زبان به ما خطا میدهد.
          </Answer>

          <Question
            questionNumber={4}
            question={`در فریمورک Nextjs از نسخه 13 به بعد چه تغییرات مهمی در Next ایجاد شد؟`}
          />
          <Answer>optimaznig font and images |
            MDX SUPPORT |
            LAYOUT AND PAGE SUPORT (NESTED ROUTE) |

            NEW META DATA
          </Answer>

          <Question
            questionNumber={5}
            question={`بهترین روش data fetching در Next نسخه 13 و فایل سیستم app router چه مدل هایی هستند. مدل های مختلف را نام ببرید و مزیت های هر کدام را توضیح دهید`}
          />
          <Answer>SSR :  داده زمانی تولید می شود که در خواست ارسال شود
            SSG :  داده ها به صورت built-in و استایتک داخل کامپوننت ساخه شده
            clinet-side-data-rendring : دیتا ها سمت کلاینت و با استفاده از fetch ,useEfect, axios انجام میشود
            routing : pageRouting | App routing
          </Answer>

          <Question questionNumber={6} question={`وظیفه Middleware در nextjs چیست؟`} />
          <Answer>در واقع middleware مانند یک رابط میان دو قسمت عمل کند یک از بیشترین استفاده هایی که ما از این گزینه میکنیم برای احراز هویت کاربر است که اطلاعات در صورت درست بودن منجر به 
            انتقال به صفحه نهایی میشود
          </Answer>

          <Question
            questionNumber={7}
            question={`برای اینکه در Nextjs سمت کلاینت کدی اجرا شود باید چه کدی را به آن کامپوننت اضافه کنیم؟`}
          />
          <Answer>use clinet</Answer>

          <Question
            questionNumber={8}
            question={`امتیاز CLS مربوط به Core Web Vital را توضیح دهید و برای نگه داشتن این امتیاز نزدیک به 0 چه کارهایی را باید در طراحی وبسایت و NextJS رعایت کرد؟`}
          />
          <Answer>میزان پایداری و ثبات یک صفحه  در زمان بارگذاری و تعامل ان با کاربر   
            حال اقداماتی که میتوان این ثبات را نگه داشت عبارتند از
            استفاده مناسب از placeholder ها|
            بارگذاری fonts|
            عدم کارکرد زیباد با DOM 
            در زمان بارگذاری صفحه

          </Answer>

          <Question
            questionNumber={9}
            question={`یک کامپوننت به نام Counter ایجاد کنید که دو دکمه داشته باشد که با زدن دکمه + یک عدد به شمارنده اضافه و با زدن دکمه - یک عدد کم کند و اگر آن عدد ضریب 5 بود در کنسول یک پیغامی را نمایش دهد`}
          />
          <Counter/>
          <Question
            questionNumber={10}
            question={`یک هدر (NavBar) طراحی کنید که یک لوگو داشته باشد که به صفحه اصلی لینک می شود . یک منو که به صفحه درباره ما (صفحه درباره ما ایجاد شود). یک منو به نام گالری تصاویر (صفحه گالری ایجاد شود) و منو ها به صفحه خودشان لینک شوند. یک لوگو درون پوشه پابلیک قرار دارد. در نهایت هدر در تمام صفحات نمایش داده شوند`}
          />

          <Question
            questionNumber={11}
            question={`درون صفحه گالری تصاویر این آدرس را Fetch کنید https://jsonplaceholder.typicode.com/albums/1/photos  و به صورت گالری تصاویر نمایش دهید و با کلیک بر روی هر تصویر سایز بزرگ آن در یک تب جدید نمایش داده شود`}
          />

          <Question
            questionNumber={12}
            question={`یک image Slider با هر کتابخانه و روشی که دوست دارید بسازید چند تصویر داخل پوشه public/slider وجود دارد که آن تصاویر را درون اسلایدر نمایش دهید. اسلایدر باید قابلیت swipe با انگشت و قابلیت auto slide داشته باشد که به صورت خودکار به تصویر بعد برود`}
          />

          <Question
            questionNumber={13}
            question={`یک صفحه داینامیک با اسم post ایجاد کنید که بر اساس id اطلاعات هر پست را نمایش دهد که از این آدرس fetch کنید: https://jsonplaceholder.typicode.com/posts/1  مثلا به این آدرس: /post/1 و این عدد متغیر باشد 
 و اگر post وجود نداشت ارور 404 بدهد`}
          />

          <Question
            questionNumber={14}
            question={`یک فرم ساده طراحی کنید که سه فیلد نام ایمیل و شماره موبایل داشته باشد و یک دکمه ثبت که موقع فشردن ثبت اطلاعات ایمیل و موبایل Validate شوند و در نهایت نتیجه فرم در کنسول چاپ شود

`}
          />
          <Question
            questionNumber={15}
            question={`Incremental Static Regeneration (ISR) یا در نسخه جدید: generateStaticParams را در nextjs توضیح دهید و یک صفحه با api دلخواه پیاده سازی کنید که از این روش data fetching استفاده میکند`}
          />
                  <Answer>این ویژگی باعث می شود  صفحات ما از حالت داینامیک به استاتیک تغیر کنند 
                    برای مثال : فکر کنید ما 15 عکس داریم و هر عکس با کلیک کردن روی ان توسط Id مربوطه باز شود
                    حال به این دلیل که مل id های مختلفی داریم next.js نمی تواند تشخیص دهد  کاربر کدام   عکس را باز میکند پس صفحه ما داینامیک می شود مربوط به هرکدام از id
                    اما باgenerateStaticParams  میتوانیم تمام id های ممکن را به next.js معرفی کنیم  و صفخات دوباهر به  حالت استاتیک بر می گردن و طول کسیدن به دلیل پردازش هر عکس  کمتر می شود.
                  </Answer>

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
