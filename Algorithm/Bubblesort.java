import java.io.IOException;

public class BubbleSort {
    public static void main(String[] args) throws IOException {
        // write your code here
        int[] arr = {3,5,2,6,4,7,9,1,8};

        for(int num: arr){
            System.out.printf("%d, ", num);
        }
        System.out.println();

        for(int i=0; i<arr.length; i++){
            for(int j=1; j<arr.length-i; j++){
                if(arr[j] < arr[j-1]){
                    int temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                }
            }
        }
        
        for(int num: arr){
            System.out.printf("%d, ", num);
        }
    }
}

