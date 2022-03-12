import java.io.IOException;

public class InsertionSort {
    public static void main(String[] args) throws IOException {
        // write your code here
        int[] arr = {3,5,2,6,4,7,9,1,8};

        for(int num: arr){
            System.out.printf("%d, ", num);
        }
        System.out.println();

        for(int i=1; i<arr.length; i++){
            int now = arr[i];
            int prev = i-1;
            while(prev >= 0 && arr[prev] >= now){
                arr[prev+1] = arr[prev];
                prev--;
            }
            arr[prev+1] = now;
        }

        for(int num: arr){
            System.out.printf("%d, ", num);
        }
    }
}

