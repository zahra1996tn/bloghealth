<template>

<home />
<about :title="titleabout" :text="textabout" />
<cardabout />
<about :title="titleabout2" :text="textabout2" />
<div class="mycard">
    <card  :title="titlecard1" :text="textcard1" class="bg-card1" />
    <card  :title="titlecard2" :text="textcard2" class="bg-card2" />
    <card  :title="titlecard3" :text="textcard3" class="bg-card3" />
</div>
<foter />
</template>

<script>
import { ref } from '@vue/reactivity'
import about from './homepage/about.vue'
import cardabout from './homepage/cardabout.vue'
import Card from './homepage/card.vue'
import foter from './homepage/foter.vue'
import home from './homepage/home.vue'
export default {
components :{ about , cardabout, Card,foter, home},
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

    return {
        titleabout , textabout , titleabout2 , textabout2,titlecard1 , textcard1,
        titlecard2 ,textcard2, titlecard3, textcard3
    }
}
}
</script>

<style>

</style>