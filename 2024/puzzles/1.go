package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func handleError(err error) {
  if err != nil {
    fmt.Println("Error:", err)
    os.Exit(1)
  }
}

func createLists() ([]int, []int){
  // Open the file
  file, err := os.Open("1.input")
  if err != nil {
    fmt.Println("Error opening file:", err)
    return nil, nil
  }
  defer file.Close()

  // Create a new scanner
  scanner := bufio.NewScanner(file)

  list1 := []int{}
  list2 := []int{}
  for scanner.Scan() {
    line := scanner.Text()
    numbers  := strings.Split(line, "   ")

    num1, err := strconv.Atoi(numbers[0])
    handleError(err)
    num2, err := strconv.Atoi(numbers[1]) 
    handleError(err)

    list1 = append(list1, num1)
    list2 = append(list2, num2) 
  }
  sort.Ints(list1) 
  sort.Ints(list2) 
  return list1, list2
}

func partOne() { 
  var total int
  list1, list2 := createLists()
  for i := 0 ; i < len(list1) ; i++ {
    diff := math.Abs(float64(list1[i] - list2[i]))
    total += int(diff)
  }
  fmt.Println("Answer: ", total)
}

func partTwo() {
  var total int
  list1, list2 := createLists()
  for _, num1 := range list1 {
    count := 0
    for _, num2 := range list2 {
      if num1 == num2 {
        count++
      }
    }
    total += count*num1
  } 
  fmt.Println("Answer: ", total)
}

func main(){
  partOne()
  partTwo()
}
