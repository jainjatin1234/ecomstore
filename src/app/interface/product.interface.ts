export interface Product
{
  name:String;
  title:String;
  image:{
    public_id:String;
    url:String;
};
// image:String;
  price:Number;
  dprice:Number;
  stock:Number;
}
