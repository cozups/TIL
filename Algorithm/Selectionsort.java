import java.io.IOException;

public class SelectionSort {
    public static void main(String[] args) throws IOException {
        // write your code here
        int[] arr = {3,5,2,6,4,7,9,1,8};

        for(int num: arr){
            System.out.printf("%d, ", num);
        }
        System.out.println();

        for(int i=0; i<arr.length; i++){
            int indexMin = i;
            for(int j=i+1; j<arr.length; j++){
                if(arr[j] < arr[indexMin]){
                    indexMin = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[indexMin];
            arr[indexMin] = temp;
        }

        for(int num: arr){
            System.out.printf("%d, ", num);
        }
    }
}

