import pandas as pd
df = pd.read_csv("data2.csv",header=None,encoding='gbk')
data = df.values.tolist()
# 将数据写入 JavaScript 文件
with open('jidata2.js', 'w', encoding='utf-8') as jsfile:
    jsfile.write("var jidata2 = " + str(data))
print(data)