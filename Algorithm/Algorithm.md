# 알고리즘

## C++에서 실제로 정렬할 때

```
vector<int> v = {4,2,5,3,5,8,3};
```

이 상황에서

`sort(v.begin(), v.end());` 오름차순 정렬
`sort(v.rbegin(), v.rend());` 내림차순 정렬

```
int n = 7;
int a[] = {4,2,5,3,5,8,3};
sort(a, a+n);
```

```
string s = "monkey";
sort(s.begin(), s.end());
```

## Bubble Sort

```
#include <iostream>

using namespace std;

void swap(int *a, int *b) {
	int temp = *a;
	*a = *b;
	*b = temp;
}
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int arr[] = { 1,3,8,2,9,2,5,6 };
	int n = sizeof(arr) / sizeof(int);
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(&arr[j], &arr[j + 1]);
			}
		}
	}

	for (int i = 0; i < n; i++) {
		cout << arr[i] << ' ';
	}
	return 0;
}
```

## Merge Sort

```
#include <iostream>

using namespace std;

int arr[] = { 1,3,8,2,9,2,5,6 };
int* arr2;
void swap(int* a, int* b) {
	int temp = *a;
	*a = *b;
	*b = temp;
}
void merge(int left, int right) {
	int mid = (left + right) / 2;

	int i = left;
	int j = mid + 1;
	int k = left;
	while (i <= mid && j <= right) {
		if (arr[i] <= arr[j]) {
			arr2[k++] = arr[i++];
		}
		else {
			arr2[k++] = arr[j++];
		}
	}

	while (i <= mid) {
		arr2[k++] = arr[i++];
	}
	while (j <= right) {
		arr2[k++] = arr[j++];
	}

	for (int i = left; i <= right; i++) {
		arr[i] = arr2[i];
	}
}
void partition(int left, int right) {
	if (left < right) {
		int mid = (left + right) / 2;

		partition(left, mid);
		partition(mid + 1, right);
		merge(left, right);
	}
}
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n = sizeof(arr) / sizeof(int);
	arr2 = new int[n];

	partition(0, n - 1);

	for (int i = 0; i < n; i++) {
		cout << arr[i] << ' ';
	}
	return 0;
}

```

## Counting Sort

```
#include <iostream>

using namespace std;

int arr[] = { 1,3,6,9,9,3,5,9 };

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int count[10] = { 0, };
	int n = sizeof(count) / sizeof(int);
	int *sorted = new int[sizeof(arr) / 4];
	for (int i = 0; i < sizeof(arr) / sizeof(int); i++) {
		count[arr[i]]++;
	}
	for (int i = 1; i < n; i++) {
		count[i] += count[i - 1];
	}

	for (int i = sizeof(arr) / 4 - 1; i >= 0; i--) {
		sorted[count[arr[i]]-1] = arr[i];
		count[arr[i]]--;
	}

	for (int i = 0; i < sizeof(arr) / 4; i++) {
		cout << sorted[i] << ' ';
	}
	return 0;
}
```

## 이분탐색 - Upper Bound, Lower Bound

### Lower Bound

- 특정 K값보다 같거나 큰값이 처음 나오는 위치를 리턴

```
public static int lowerBound(int k) {
        int lo = 0; int hi = n;
        // arr[0] ~ arr[n-1]보다 큰 숫자를 찾을 때 결과값은 n일 것이기 때문에 hi를 n으로 둔다.

        while(lo < hi) {
            int mid = (lo+hi)/2;
            if(arr[mid] >= k) {
                hi = mid;
            } else {
                lo = mid+1;
            }
        }

        return lo;
    }
```

### Upper Bound

- K값보다 처음으로 큰 값이 나오는 위치를 리턴

```
public static int upperBound(int k) {
        int lo = 0; int hi = n;
        // arr[0] ~ arr[n-1]보다 큰 숫자를 찾을 때 결과값은 n일 것이기 때문에 hi를 n으로 둔다.

        while(lo < hi) {
            int mid = (lo+hi)/2;

            if(arr[mid] > k) {
                hi = mid;
            } else lo = mid+1;
        }

        return lo;
    }

```

<br/>

- 예제 1

![lowerUpper1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMIAMA%2FbtqwvrNzD8k%2FLYflC0V1UnMn2OFyHfX0U1%2Fimg.png)

- 예제 2

![lowerUpper2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2eip7%2FbtqwwYRwAfB%2FTuM9ohOJ7TGEWJtiw3w8nk%2Fimg.png)

## 벡터에서 중복 원소 제거하기

```
vector<int> v = {2,3,3,5,7,8,8,8};

v.erase(unique(v.begin(), v.end()), v.end);
```

`unique(v.begin(), v.end())`
{2,3,3,5,7,8,8,8} -> {2,3,5,7,8,**3,8,8**}
처음으로 중복 원소가 나타나는 '3'의 주소를 리턴한다.

따라서 `v.erase(unique(v.begin(), v.end()), v.end);`를 하면 {3,8,8}이 지워진다.
