<template>

<home />
<about :title="titleabout" :text="textabout" />
<cardabout />
<about :title="titleabout2" :text="textabout2" />
<div class="mycard">
    <card  :title="titlecard1" :text="textcard1" class="bg-card1" />
    <card  :title="titlecard2" :text="textcard2" class="bg-card2" />
    <card  :title="titlecard3" :text="textcard3" class="bg-card3" />
    <card  :title="titlecard4" :text="textcard4" class="bg-card4" />
</div>
<about :title="titleabout4" :text="textabout4" />
<factorhealth />
<about :title="titleabout5"  />

<aboutfactor :titleaboutfactor="titleaboutfactor" :textaboutfactor="textaboutfactor" class="card-green" />
<aboutfactor :titleaboutfactor="titleaboutfactor2" :textaboutfactor="textaboutfactor2" class="card-orange" />
<aboutfactor :titleaboutfactor="titleaboutfactor3" :textaboutfactor="textaboutfactor3" class="card-green" />
<aboutfactor :titleaboutfactor="titleaboutfactor4" :textaboutfactor="textaboutfactor4" class="card-orange" />
<about :title="titleabout3" :text="textabout3" />

<team />
<foter />
</template>

<script>
import { ref } from '@vue/reactivity'
import about from './homepage/about.vue'
import cardabout from './homepage/cardabout.vue'
import Card from './homepage/card.vue'
import foter from './homepage/foter.vue'
import home from './homepage/home.vue'
import team from './homepage/team.vue'
import Factorhealth from './homepage/factorhealth.vue'
import Aboutfactor from './homepage/aboutfactor.vue'
export default {
components :{ about , cardabout, Card,foter, home , team, Factorhealth, Aboutfactor},
setup(){
    const titleabout = ref('سلامتی برایتان مهم است ؟!')
    const textabout = ref('بسیاری از افراد فکر می‌کنند سالم بودن کار دشواری است؛ در حالی که با انجام برخی ترفندهای ساده می‌توانید در مسیر زندگی سالم تر و شاداب‌تر قرار گیرید. رعایت اصول صحیح غذا خوردن، استراحت، فعال بودن و… در مجموع مسیر پر فراز و نشیب زندگی را هموارتر می‌کند.بسیاری از افراد فکر می‌کنند سالم بودن کار دشواری است؛ در حالی که با انجام برخی ترفندهای ساده می‌توانید در مسیر زندگی سالم تر و شاداب‌تر قرار گیرید. رعایت اصول صحیح غذا خوردن، استراحت، فعال بودن و… در مجموع مسیر پر فراز و نشیب زندگی را هموارتر می‌کند.')
    const titleabout2 = ref('تغذیه سالم مهمترین عامل سلامتی')
    const textabout2 = ref('برخی از رژیم‌های غذایی کاملا افراطی بوده و باعث می‌شود، بسیاری از مواد مغذی از برنامه غذایی حذف شوند. برای داشتن تغذیه سالم و سلامت بدن باید بین گروه‌های غذایی شامل پروتئین، کربوهیدرات، فیبر، ویتامین‌ها و مواد معدنی در رژیم غذایی تعادل ایجاد کنید. اینکه یک گروه غذایی را از رژیم خود حذف کنید، بسیار اشتباه است. تنها باید در هر دسته سالم‌ترین گزینه‌ها را انتخاب کنید. در ادامه هر گروه از این مواد غذایی را توضیح می‌دهیم.')
    const titlecard1 = ref('پرتقال، آناناس، نارنگی، هلو، انبه، شلیل ')
    const textcard1 = ref('این نوع میوه ها سرشار از انواع آنتی اکسیدان ها می باشند، به ویژه ویتامین C و به حفظ سلامت غشاهای مخاطی کمک می کنند. این مواد همچنین به بافت های اتصالی نیز سود می رسانند، از بیماری های قلبی جلوگیری کرده، گردش خون را تسریع می بخشند و از تورم جلوگیری می نمایند. ')
    const titlecard2 = ref('یاز، سیر، گلابی، کرفس، پیازچه ')
    const textcard2 = ref('این نوع میوه ها حاوی مقادیر متنوعی از فیتوکمیکال ها می باشند. سیر و پیاز حاوی آلیسین می بشاند که دارای خاصیت ضد ویروسی، ضد قارچی و ضد باکتریایی می باشند و می توانند عملکر مشابهی مانند یک آنتی بیوتیک خفیف را ایفا کنند. به وعده های غذایی خود مقداری سیر و پیاز اضافه کنید تا خاصیت مسمومیت غذاهای پرچرب را از بین ببرید. ')
    const titlecard3 = ref('سیب قرمز، چغندر، زغال اخته، توت فرنگی، آلو برغان، انگور، شاه توت ')
    const textcard3 = ref('این میوه ها که دارای رنگ های تیره هستند از آنتی اکسیدان های بیشماری برخوردار می باشند. جریان خون را در رگ ها بهبود می بخشند و از لخته شدن خون جلوگیری می کنند. همچنین حاوی فیتوکمیکال های ضد پیری نیز هستند. ')
    const titlecard4 = ref('تمشک آبی، انگور های بنفش رنگ، و انگور بی دانه')
    const textcard4 = ref('ترکیبات موجود در این نوع میوه ها و سبزیجات مانند آنتی اکسیدانی قوی عمل کرده و خطر ابتلا به بیماری‌های سرطانی، قلبی، وآلزایمر را کاهش داده، حتی می توانند روند پیری را به تاخیر اندازند.')
    const titleabout3 = ref('اعضای تیم !')
    const textabout3 = ref('معرفی اعضای تیم')
    const titleabout4 = ref('  عوامل موثر در سلامتی ')
    const textabout4 = ref('محققان پنج عامل در شیوه زندگی از جمله رژیم غذایی، ورزش و حفظ وزن متوسط بدن را از مهم ترین عوامل معرفی کردند.یک مطالعه جدید نشان داده است که عواملی در شیوه زندگی وجود دارد که می‌تواند شانس رسیدن به میانسالی را بدون داشتن مشکلات عمده سلامتی تضمین کند. ')
    const titleabout5 = ref('مقالات مرتبط')
    const textaboutfactor = ref('')
    const titleaboutfactor = ref('شناخت‌درمانی مبتنی بر ذهن‌آگاهی برای خودبیمارانگاری یا اضطراب سلامتی شدید')
    const textaboutfactor2 = ref('')
    const titleaboutfactor2 = ref('اضطراب متمرکز بر قلب و مراقبت های بهداشتی در بیماران مبتلا به درد قفسه سینه غیر قلبی')
    const textaboutfactor3 = ref('')
    const titleaboutfactor3 = ref('بررسی کیفیت زندگی، شدت افسردگی، اضطراب و استرس در بیماران پس از پیوند کلیه')
    const textaboutfactor4 = ref('')
    const titleaboutfactor4 = ref('علائم فیزیکی ناشناخته پزشکی در بیماران مراجعه کننده به کلینیک سرپایی پزشکی در یک بیمارستان عالی ')
   return {
        titleabout , textabout , titleabout2 , textabout2,titlecard1 , textcard1,
        titlecard2 ,textcard2, titlecard3, textcard3 , titlecard4,textcard4,titleabout3,textabout3,
        titleabout4 , textabout4,titleabout5,titleaboutfactor,textaboutfactor,titleaboutfactor2,textaboutfactor2,titleaboutfactor3,textaboutfactor3,
        titleaboutfactor4,textaboutfactor4
    }
}
}
</script>

<style>

</style>