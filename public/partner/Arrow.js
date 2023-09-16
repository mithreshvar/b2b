export default function Arrow ({active=false, left=false}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="6.09" height="10.652" viewBox="0 0 6.09 10.652" fill={(active)?"#0071e7":"#6e6e72"}>
            {left ? <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M5.328,1.836l4.028,4.03a.758.758,0,0,0,1.075,0,.767.767,0,0,0,0-1.078L5.867.222A.76.76,0,0,0,4.817.2L.222,4.785A.761.761,0,0,0,1.3,5.863Z" transform="translate(0 10.652) rotate(-90)"/> : <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M11.515,15.5l4.028-4.03a.758.758,0,0,1,1.075,0,.767.767,0,0,1,0,1.078l-4.564,4.566a.76.76,0,0,1-1.05.022l-4.6-4.585a.761.761,0,0,1,1.075-1.078Z" transform="translate(-11.246 16.839) rotate(-90)"/>}
        </svg>
    )
}