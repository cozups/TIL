import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        int[] arr = {3,5,2,6,4,7,9,1,8};

        for(int num: arr){
            System.out.printf("%d, ", num);
        }
        System.out.println();

        quickSort(arr, 0, arr.length-1);

        for(int num: arr){
            System.out.printf("%d, ", num);
        }
    }

    public static void quickSort(int[] arr, int left, int right){
        if(left >= right) return;

        int pivot = partition(arr, left, right);

        quickSort(arr, left, pivot);
        quickSort(arr, pivot+1, right);
    }

    public static int partition(int[] arr, int left, int right){
        int start = left, end = right;
        int pivot = arr[(left + right) / 2];
        while(start < end) {
            while(arr[start] < pivot) {
                start++;
            }
            while(arr[end] > pivot){
                end--;
            }
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }

        return start;
    }
}

