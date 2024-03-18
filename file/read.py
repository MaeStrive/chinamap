import pandas as pd
df = pd.read_csv("niuniudata22.csv",header=None,encoding='gbk')
data = df.iloc[:, :15].values.tolist()
# 将数据写入 JavaScript 文件
with open('niudata1.js', 'w', encoding='utf-8') as jsfile:
    jsfile.write("var niudata2 = " + str(data))
print(data)