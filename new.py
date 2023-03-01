# course = ['math', 'hist', 'phy']
# sortedCourse = sorted(course)
# print(course)

# for i in range(5):
#     print(i)
#     if i == 0:
#         print("true")
#     elif i == 1:
#         print("false")
newDIctionary = {
    'name': 'bashu',
    'age': 23,
    'course': ['hist']
}

#newDIctionary['father'] = 'dejenu'
#print(newDIctionary.get('father', 'not found'))
newDIctionary.update({'name': 'abel'})
print(newDIctionary)
# to copy a list we use [:]
# t = [1, 2, 3]
# t1 = t[:]
# t1.sort(reverse=True)
# print(t1)


# def nested_sum(t):
#     total = 0
#     for i in range(len(t)):
#         for j in range(len(t[i])):
#             total += t[i][j]
#     return total


# t = [[1, 2], [3], [4, 5, 6]]
# print(nested_sum(t))
# def middle(t):

#     return t[1:len(t)-1]


# print(middle([1, 2, 3]))

# for i in range(len(a)-1,0,-1):
#     currentValue = a[i]
#     j = i-1
#     while j >= 0 and a[j] > currentValue:
#         a[j+1] = a[j]
#         j -= 1
#     a[j+1] = currentValue
#     print(a)
# for i in range(5,1,-1):
# print(i)

# insertion sorting
# def insertionSort1(n, arr):
#     # Write your code here

#     currentValue = arr[-1]
#     i=n-1
#     while i>0 and arr[i-1]>currentValue:
#         # looping in reverse direction
#         # finding the lowest value

#          arr[i] = arr[i-1]

#          i-=1


#     arr[i] = currentValue
#output=[str(j) for j in arr]
# print(*arr)
a = [4, 5, 6, 8, 3]
# x = a[len(a)-1]
# for i in range(4, 0, -1):  # looping in reverse direction
#     # finding the lowest value
#     if(a[i-1] > x):
#         a[i] = a[i-1]
#         print(*a)
#     else:
#         a[i] = x
#         print(*a)

# insertionSort1(5, a)


def insertionSort(arr):
    # Write your code here
    n = 0
    for i in range(1, len(arr)):
        curentValue = arr[i]
        j = i-1
        while j >= 0 and arr[j] > curentValue:
            arr[j+1] = arr[j]
            n+=1
            j-+1
        arr[j+1] = curentValue
    print(n)


insertionSort(a)
