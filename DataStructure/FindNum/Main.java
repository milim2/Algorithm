// find Max num and second max num
public class Main {

    public static void main(String[] args) {
        int[] num = new int[10];
        for(int i = 0; i<num.length;i++){
            num[i] = (int)(Math.random()*100);
            System.out.println(i + "value is" + num[i] );
        }
        int max = num[0];
        int secondMax = max;

        for(int i = 1; i < num.length; i++){
            if(num[i] > max){
                secondMax = max;
                max = num[i];

            }
            else if(num[i] > secondMax && num[i] < max || max == secondMax) {
                secondMax = num[i];
            }
        }
        System.out.println("Second Max num is " + secondMax);
      }
}
