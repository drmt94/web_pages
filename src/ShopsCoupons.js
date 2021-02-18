
function ShopsCoupons(props){
    return(
        <div>
            <h3 name={"websiteName"}></h3>
            <br/>
            <h5 name={"webDescription"}></h5>
            <br/>
            <h5 name={"couponPercentage"}></h5>
            <button onClick={props.getCoupon(props.name)}/>
        </div>
    )
}
export default ShopsCoupons;