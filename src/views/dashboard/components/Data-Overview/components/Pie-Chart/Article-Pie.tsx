import React, { useEffect, useState } from "react";
import PieChart from ".";
import { getArticleCountInfo } from "@/api/article";
import { ArticleStatusEnum } from "@/typings/article";
import { ARTICLE_STATUS_MAP } from "@/const/article";

const ArticlePieChart = () => {

  const [countInfo, setCountInfo] = useState({
    [ArticleStatusEnum.AUDITED]: 0,
    [ArticleStatusEnum.DELETED]: 0,
    [ArticleStatusEnum.FORBIDDEN]: 0,
    [ArticleStatusEnum.UNAUDITED]: 0
  });

  const data = Object.keys(countInfo).reduce((prev, curr) => {
    const currTarget = {
      name: ARTICLE_STATUS_MAP[curr as unknown as ArticleStatusEnum].value,
      value: countInfo[curr as unknown as ArticleStatusEnum],
    }
    return [...prev, currTarget];
  }, [] as Array<Record<string, any>>);

  useEffect(() => {
    getArticleCountInfo().then(res => {
      setCountInfo(res.data);
    })
  }, []);

  return (
    <PieChart title="文章分布" data={data}/>
  );
};

export default ArticlePieChart;