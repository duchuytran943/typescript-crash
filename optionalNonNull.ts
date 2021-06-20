/**
 * OPTIONAL AND NON NULL
 */
 const addNumber = (a: number, b?: number): number => {
    return b ? a + b : a;
  };
  console.log(addNumber(1, 2));
  console.log(addNumber(3));
  
  const addNonNull = (a: number, b?: number): number => {
    /**
     * tham số b có thể truyển vào or không,
     * nhưng ở strict mode thì sẽ tự phát hiện cái trả a + b trả về bị sai nếu b không truyển vào nó báo lỗi,
     * nên ta thêm !b để bảo là tau sẽ truyển tham số cho b, mày đừng có lo.
     */
    return a + b!;
  };
  
  console.log(addNonNull(6));
  