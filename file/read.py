import pandas as pd

# 读取CSV文件
data = pd.read_csv('data.csv',encoding='gbk')

# 获取标题行
header = data[:2]

# 获取数据行
data = data[2:]

# 将数据拆分成多个数组
split_data = [data[i:i+61] for i in range(0, len(data), 61)]

# 将数据写入多个JavaScript文件
num_files = 10
for i in range(num_files):
    with open(f'junzhudata{i+1}.js', 'w',encoding='gbk') as file:
        file.write('const data = [\n')
        for _, row in split_data[i].iterrows():
            row_values = [f'"{val}"' if isinstance(val, str) else str(val) for val in row]
            file.write(f'[{", ".join(row_values)}],\n')
        file.write('];')