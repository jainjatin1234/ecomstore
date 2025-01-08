export interface Deal
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
  sold:Number;
  available:Number;
}
