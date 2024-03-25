import csv
import json

# 读取CSV文件
with open("data.csv", newline='') as csvfile:
    csvreader = csv.reader(csvfile)
    data = [row for row in csvreader]

# 除去两行表头
data = data[2:]

# 将数据分成十份
data_chunks = [data[i:i + len(data) // 10] for i in range(0, len(data), len(data) // 10)]

# 将数据转换为二维数组并写入十个不同的 JavaScript 文件
for i, chunk in enumerate(data_chunks):
    data_array = []
    for row in chunk:
        data_array.append(row)

    with open(f"output_{i + 1}.js", "w", encoding='utf-8') as js_file:
        js_file.write("const data = ")
        json.dump(data_array, js_file, ensure_ascii=False)