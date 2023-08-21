export class calendarPage{
    static todayLink="button:contains('Today')";
    static smallCalendarHeader='header.flex.justify-between>p';
    static smallCalendarLeftArrow='header.flex.justify-between>div>button>span:contains("chevron_left")';
    static smallCalendarRightArrow='header.flex.justify-between>div>button>span:contains("chevron_right")';
    static firstDateLink='button.py-1.w-full';  
    static createBtn='span:contains("Create")'; 
    static titleText='input[placeholder="Add title"]'; 
    static greenLabel='span.bg-green-500'; 
    static redLabel='span.bg-red-500';
    static saveBtn='button[type="submit"]'; 
    static deleteBtn='span:contains("delete")'; 
    static eventContainer='div.flex-1.cursor-pointer'; 
    static redEvent='div.bg-red-200'; 
    static calTitle='h1.mr-10.text-xl'; 
    static randomCatFactBtn='button.random-cat-fact-button'; 
    static randomCatFactText='p.random-cat-fact';    
}
