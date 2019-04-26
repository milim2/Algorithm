public class QuickSorter {
    private static int number = 11;
    private static int[] data;
    private static int cnt = 0; // the number of execution of quick_sort 
    
    public static void quick_sort(int[] data, int x, int y) {
        cnt++;

        if (x >= y) {
            // if element number is only one
            return;
        }

        int pivot = x;
        int left = pivot + 1;
        int right = y;
        int temp;

        while (left < right) {
            while (left <= y && data[left] < data[pivot]) {
                left++;
            }
            while (right >= pivot && data[pivot] < data[right]) {
                right--;
            }

            if (left < right) {
                temp = data[left];
                data[left] = data[right];
                data[right] = temp;
            } else {
                temp = data[pivot];
                data[pivot] = data[right];
                data[right] = temp;
            }

            quick_sort(data, x, right - 1);
            quick_sort(data, right + 1, y);

        }
    }

    public static void printData(int[] data, int number) {
        for (int i = 0; i < number; i++) {
            System.out.print(data[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {

        // 1~100 random number
        data = new int[number];
        for (int i = 0; i < number; i++) {
            data[i] = (int) (Math.random() * 100);
        }

        // before sorting
        printData(data, number);

        // begin sorting
        quick_sort(data, 0, number - 1);

        // after sorting
        printData(data, number);

        // calnum
        System.out.println("N : " + number + " / cnt : " + cnt);
    }
}
