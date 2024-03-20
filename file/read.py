import pandas as pd
df = pd.read_csv("data.csv",header=None,encoding='gbk')
data = df.values.tolist()
# 将数据写入 JavaScript 文件
with open('hahaha.js', 'w', encoding='utf-8') as jsfile:
    jsfile.write("var niudata2 = " + str(data))
print(data)