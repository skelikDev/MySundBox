import {LoadingDemos} from "./LoadingDemos";
import {FlippingCard} from "./FlippingCard";
import {DragWithoutSpringDemos} from "./DragWithoutSpringDemos";
import {DragWithSpringDemos} from "./DragWithReactSpringDemos";


interface ICard {
    title: string,
    des: string,
    component: () => JSX.Element
    componentName: string
}
let des = {
    Loading: 'Простой пример AutoAnimation. Используется useMesure которая измеряет размеры элемента. Анимация привязана к размеру родителького блока.',
    Flipping: '',
    DragWithoutSpring: 'DragWithoutSpring',
    DragWithSpring: 'DragWithSpring'
}

export const cardsArray: ICard[] = [
    {title: 'Loading', des: des.Loading, component: LoadingDemos,componentName: "LoadingDemos" },
    {title: 'Flipping', des: des.Flipping, component: FlippingCard,componentName: "FlippingCard"},
    {title: 'DragWithoutSpring', des: des.DragWithoutSpring, component: DragWithoutSpringDemos,componentName: "DragWithoutSpringDemos"},
    {title: 'DragWithSpring', des: des.DragWithSpring, component: DragWithSpringDemos,componentName: "DragWithSpringDemos"},
]


