const scenarioData = {
  medical_supply_chain: {
    name: "医疗物资供应链",
    meta: ["B2B供应链", "全球采购", "温控"],
    risks: [
      {
        title: "上游产能波动",
        description:
          "原材料受疫情、政策或地缘局势影响导致断供或延迟。",
        impact:
          "可能造成生产停滞、履约违约、医院供货对接失败，影响患者救治。",
        level: "high",
        likelihood: 0.72,
      },
      {
        title: "冷链温控失效",
        description:
          "运输与仓储环节温控设备故障，导致疫苗、血浆等高价值物资效力下降。",
        impact:
          "带来品质风险与医疗事故隐患，造成索赔或监管处罚。",
        level: "high",
        likelihood: 0.64,
      },
      {
        title: "合规与审计压力",
        description:
          "多国卫生监管标准不一致，合规认证周期长、成本高。",
        impact:
          "导致入境滞留、库存积压以及经营成本增加。",
        level: "medium",
        likelihood: 0.55,
      },
      {
        title: "信息系统安全",
        description:
          "供应链协同系统遭遇网络攻击或勒索软件入侵。",
        impact:
          "数据泄露、运营中断及声誉受损，影响长期合作。",
        level: "medium",
        likelihood: 0.42,
      },
    ],
    solutions: [
      {
        title: "多元化供应策略",
        detail:
          "建立备选供应商与安全库存，签订应急采购协议，配合贸易信用保险。",
      },
      {
        title: "冷链监测系统升级",
        detail:
          "引入IoT实时温控监测，结合冷链责任险与高额货运险。",
      },
      {
        title: "跨境合规顾问",
        detail:
          "聘请合规顾问团队，建立认证时间表与内部审核制度。",
      },
      {
        title: "零信任安全架构",
        detail:
          "部署零信任网络、数据备份与网络安全险，快速恢复运营。",
      },
    ],
  },
  renewable_energy_farm: {
    name: "新能源风电场运营",
    meta: ["能源资产", "自然灾害", "资本密集"],
    risks: [
      {
        title: "风机机械故障",
        description:
          "齿轮箱、叶片等关键部件因疲劳或保养不足出现损坏。",
        impact:
          "停机检修导致发电减产、维修成本高昂。",
        level: "medium",
        likelihood: 0.46,
      },
      {
        title: "极端天气冲击",
        description:
          "台风、冰冻或雷击对风机以及输电线路造成损害。",
        impact:
          "资产受损停运，触发保险理赔和产能损失。",
        level: "high",
        likelihood: 0.38,
      },
      {
        title: "政策补贴调整",
        description:
          "新能源补贴政策可能调整或退坡，影响现金流与回报率。",
        impact:
          "融资偿债压力增大，项目收益率下降。",
        level: "medium",
        likelihood: 0.52,
      },
      {
        title: "并网消纳风险",
        description:
          "电网负荷不足或消纳优先级降低，导致发电外送受限。",
        impact:
          "产生弃风电量，损害收入，增加运营成本。",
        level: "medium",
        likelihood: 0.48,
      },
    ],
    solutions: [
      {
        title: "预防性维护",
        detail:
          "采用预测性维护系统，结合设备质保与工程险降低故障率。",
      },
      {
        title: "灾害应急预案",
        detail:
          "制定极端天气预案，配置财产一切险与营运中断险。",
      },
      {
        title: "政策监测机制",
        detail:
          "建立政策情报跟踪团队，动态调整投融资策略。",
      },
      {
        title: "多元售电渠道",
        detail:
          "通过长协、电力现货市场等方式提高并网消纳能力。",
      },
    ],
  },
  city_bike_sharing: {
    name: "城市共享单车平台",
    meta: ["消费出行", "线下运营", "数据隐私"],
    risks: [
      {
        title: "资产损耗与遗失",
        description:
          "单车在投放区域被偷盗、损毁，或维修需求频繁。",
        impact:
          "增加维护投入，影响站点覆盖率。",
        level: "medium",
        likelihood: 0.67,
      },
      {
        title: "用户骑行安全",
        description:
          "道路事故或设备故障导致用户受伤。",
        impact:
          "引发赔偿纠纷、媒体负面报道并影响品牌形象。",
        level: "high",
        likelihood: 0.31,
      },
      {
        title: "数据合规与隐私",
        description:
          "用户骑行数据被滥用或泄露，触犯数据安全法。",
        impact:
          "受到监管处罚，导致用户信任下降。",
        level: "medium",
        likelihood: 0.44,
      },
      {
        title: "运营调度效率",
        description:
          "调度计划不合理导致车辆供需错配。",
        impact:
          "高峰期车辆不足，低峰期闲置浪费，损失营收。",
        level: "low",
        likelihood: 0.58,
      },
    ],
    solutions: [
      {
        title: "智能防盗与巡检",
        detail:
          "部署GPS与锁控系统，搭配财产险与盗抢险分担损失。",
      },
      {
        title: "安全教育与保险",
        detail:
          "上线安全提示、赠送骑行保险，优化车辆维护流程。",
      },
      {
        title: "数据治理体系",
        detail:
          "实施数据分级管理，满足隐私法要求，并配置网络安全险。",
      },
      {
        title: "动态调度算法",
        detail:
          "通过AI预测需求并优化调度，提高车辆使用效率。",
      },
    ],
  },
  family_health_planning: {
    name: "家庭健康保障规划",
    meta: ["个人保障", "长期护理", "财务规划"],
    risks: [
      {
        title: "重大疾病支出",
        description:
          "家庭成员罹患癌症或重大疾病导致支出骤增。",
        impact:
          "医疗费用超出家庭储蓄，影响长期生活品质。",
        level: "high",
        likelihood: 0.35,
      },
      {
        title: "意外伤害事故",
        description:
          "交通或家居事故造成伤残，需要持续治疗或康复。",
        impact:
          "造成收入中断，增加长期护理费用。",
        level: "medium",
        likelihood: 0.28,
      },
      {
        title: "长期照护需求",
        description:
          "老人或慢性病患者需要长期照护服务。",
        impact:
          "持续支出压力，可能影响子女教育或房贷还款。",
        level: "medium",
        likelihood: 0.42,
      },
      {
        title: "收入结构单一",
        description:
          "家庭主要收入来源依赖单一职业，面临失业风险。",
        impact:
          "经济安全性降低，短期生活成本难以覆盖。",
        level: "low",
        likelihood: 0.4,
      },
    ],
    solutions: [
      {
        title: "重疾险与医疗险组合",
        detail:
          "规划重疾险+百万医疗险，搭配保费豁免功能。",
      },
      {
        title: "综合意外险",
        detail:
          "覆盖意外医疗、伤残和身故，多人共用保障。",
      },
      {
        title: "长期护理险与互助金",
        detail:
          "预留长期护理险，结合社区照护资源与补贴政策。",
      },
      {
        title: "家庭应急基金",
        detail:
          "建立6-12个月生活费的应急储备，规划被动收入来源。",
      },
    ],
  },
};

const scenarioForm = document.getElementById("scenario-form");
const scenarioInput = document.getElementById("scenario-input");
const scenarioCards = document.querySelectorAll(".scenario-card");
const currentScenario = document.getElementById("current-scenario");
const scenarioMeta = document.getElementById("scenario-meta");
const riskTags = document.getElementById("risk-tags");
const riskList = document.getElementById("risk-list");
const solutionList = document.getElementById("solution-list");

// API配置相关元素
const apiModal = document.getElementById("api-modal");
const apiConfigBtn = document.getElementById("api-config-btn");
const closeModalBtn = document.getElementById("close-modal");
const saveConfigBtn = document.getElementById("save-config");
const testConnectionBtn = document.getElementById("test-connection");
const apiKeyInput = document.getElementById("api-key");
const apiEndpointInput = document.getElementById("api-endpoint");
const modelNameSelect = document.getElementById("model-name");

// API配置存储
let apiConfig = {
  apiKey: localStorage.getItem('deepseek_api_key') || '',
  endpoint: 'https://api.deepseek.com/v1/chat/completions',
  model: localStorage.getItem('deepseek_model') || 'deepseek-chat'
};

function renderScenario(scenarioKey, customScenarioText) {
  const scenarioInfo = scenarioData[scenarioKey];

  if (!scenarioInfo && !customScenarioText) {
    currentScenario.textContent = "请选择或输入场景";
    scenarioMeta.innerHTML = "";
    riskTags.innerHTML = "";
    riskList.innerHTML = '<p class="placeholder">请选择场景以查看具体风险。</p>';
    solutionList.innerHTML =
      '<p class="placeholder">将根据选定场景生成针对性建议。</p>';
    return;
  }

  const targetScenarioName =
    customScenarioText?.trim() || scenarioInfo?.name || "自定义场景";
  currentScenario.textContent = targetScenarioName;

  const targetMeta = scenarioInfo?.meta ?? ["自定义分析"];
  scenarioMeta.innerHTML = targetMeta
    .map((metaItem) => `<span>${metaItem}</span>`)
    .join("");

  const targetRisks = scenarioInfo?.risks ?? [
    {
      title: "风险识别中",
      description:
        "系统正在分析您的场景，请结合行业专家或保险顾问以获取更精确结论。",
      impact: "暂无数据",
      level: "medium",
      likelihood: 0.3,
    },
  ];

  const targetSolutions = scenarioInfo?.solutions ?? [
    {
      title: "咨询专业顾问",
      detail: "建议联系风险管理顾问或保险策划师进行定制方案设计。",
    },
  ];

  riskTags.innerHTML = targetRisks
    .map((risk) => `<li>${risk.title}</li>`)
    .join("");

  riskList.innerHTML = targetRisks
    .map((risk) => {
      const likelihoodPercent = Math.round(risk.likelihood * 100);
      const meterClass = `risk-level-${risk.level}`;
      return `
        <article class="risk-item">
          <strong>${risk.title}</strong>
          <p>${risk.description}</p>
          <p>影响：${risk.impact}</p>
          <div class="risk-meter">
            <span class="${meterClass}" style="width: ${likelihoodPercent}%"></span>
          </div>
          <small>发生概率估计：${likelihoodPercent}%</small>
        </article>
      `;
    })
    .join("");

  solutionList.innerHTML = targetSolutions
    .map((solution) => {
      return `
        <article class="solution-item">
          <strong>${solution.title}</strong>
          <p>${solution.detail}</p>
        </article>
      `;
    })
    .join("");
}

scenarioCards.forEach((card) => {
  card.addEventListener("click", () => {
    const scenarioId = card.getAttribute("data-scenario-id");
    renderScenario(scenarioId);
    
    // 滚动到风险面板
    const riskPanel = document.getElementById("risk-panel");
    riskPanel.scrollIntoView({ behavior: "smooth" });
  });
});

// DeepSeek API调用函数
async function analyzeScenarioWithAI(scenarioText) {
  if (!apiConfig.apiKey) {
    throw new Error('请先配置API Key');
  }

  const prompt = `请分析以下业务场景的风险，并提供解决方案：

场景描述：${scenarioText}

请按以下JSON格式返回分析结果：
{
  "scenario_name": "场景名称",
  "meta_tags": ["标签1", "标签2", "标签3"],
  "risks": [
    {
      "title": "风险名称",
      "description": "风险描述",
      "impact": "影响说明",
      "level": "high/medium/low",
      "likelihood": 0.65
    }
  ],
  "solutions": [
    {
      "title": "解决方案名称", 
      "detail": "详细说明"
    }
  ]
}

请确保：
1. 提供3-5个主要风险点
2. 为每个风险提供对应的解决方案
3. 风险等级要合理评估
4. 发生概率用0-1之间的小数表示`;

  const response = await fetch(apiConfig.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiConfig.apiKey}`,
    },
    body: JSON.stringify({
      model: apiConfig.model,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  });

  if (!response.ok) {
    throw new Error(`API调用失败: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;
  
  try {
    return JSON.parse(content);
  } catch (e) {
    // 如果返回的不是标准JSON，尝试提取JSON部分
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('AI返回格式解析失败');
  }
}

scenarioForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const customScenarioText = scenarioInput.value;

  if (!customScenarioText.trim()) {
    scenarioInput.focus();
    scenarioInput.setAttribute("aria-invalid", "true");
    return;
  }

  scenarioInput.removeAttribute("aria-invalid");
  
  // 获取分析模式
  const analysisMode = document.querySelector('input[name="analysis-mode"]:checked').value;
  
  // 显示加载状态
  const submitButton = scenarioForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = analysisMode === 'ai' ? "AI分析中..." : "分析中...";
  submitButton.disabled = true;
  
  try {
    if (analysisMode === 'ai') {
      // AI深度分析
      const aiResult = await analyzeScenarioWithAI(customScenarioText);
      renderAIScenario(aiResult);
    } else {
      // 模板匹配
      setTimeout(() => {
        renderScenario(undefined, customScenarioText);
      }, 800);
    }
    
    // 滚动到风险面板
    setTimeout(() => {
      const riskPanel = document.getElementById("risk-panel");
      riskPanel.scrollIntoView({ behavior: "smooth" });
    }, 100);
    
  } catch (error) {
    alert(`分析失败: ${error.message}`);
    console.error('Analysis error:', error);
  } finally {
    // 恢复按钮状态
    submitButton.textContent = originalText;
    submitButton.disabled = false;
    
    // 清空输入框
    scenarioInput.value = "";
  }
});

// 渲染AI分析结果
function renderAIScenario(aiResult) {
  currentScenario.textContent = aiResult.scenario_name || "AI分析结果";
  
  // 添加AI标识
  scenarioMeta.innerHTML = (aiResult.meta_tags || ["AI分析"]).map(tag => `<span>${tag}</span>`).join("") + 
    '<span style="background: linear-gradient(135deg, #60a5fa, #34d399); color: #0b1f4d;">🤖 AI分析</span>';
  
  const risks = aiResult.risks || [];
  const solutions = aiResult.solutions || [];
  
  riskTags.innerHTML = risks.map(risk => `<li>${risk.title}</li>`).join("");
  
  riskList.innerHTML = risks.map(risk => {
    const likelihoodPercent = Math.round((risk.likelihood || 0.3) * 100);
    const meterClass = `risk-level-${risk.level || 'medium'}`;
    return `
      <article class="risk-item ai-generated">
        <strong>${risk.title}</strong>
        <p>${risk.description}</p>
        <p>影响：${risk.impact}</p>
        <div class="risk-meter">
          <span class="${meterClass}" style="width: ${likelihoodPercent}%"></span>
        </div>
        <small>发生概率估计：${likelihoodPercent}% (AI评估)</small>
      </article>
    `;
  }).join("");
  
  solutionList.innerHTML = solutions.map(solution => {
    return `
      <article class="solution-item ai-generated">
        <strong>${solution.title}</strong>
        <p>${solution.detail}</p>
      </article>
    `;
  }).join("");
}

// API配置弹窗事件
apiConfigBtn.addEventListener('click', () => {
  // 加载已保存的配置
  apiKeyInput.value = apiConfig.apiKey;
  apiEndpointInput.value = apiConfig.endpoint;
  modelNameSelect.value = apiConfig.model;
  apiModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  apiModal.style.display = 'none';
});

apiModal.addEventListener('click', (e) => {
  if (e.target === apiModal) {
    apiModal.style.display = 'none';
  }
});

saveConfigBtn.addEventListener('click', () => {
  apiConfig.apiKey = apiKeyInput.value.trim();
  apiConfig.endpoint = apiEndpointInput.value.trim();
  apiConfig.model = modelNameSelect.value;
  
  // 保存到本地存储
  localStorage.setItem('deepseek_api_key', apiConfig.apiKey);
  localStorage.setItem('deepseek_model', apiConfig.model);
  
  alert('配置已保存！');
  apiModal.style.display = 'none';
});

testConnectionBtn.addEventListener('click', async () => {
  const testApiKey = apiKeyInput.value.trim();
  const testEndpoint = apiEndpointInput.value.trim();
  const testModel = modelNameSelect.value;
  
  if (!testApiKey) {
    alert('请输入API Key');
    return;
  }
  
  testConnectionBtn.textContent = '测试中...';
  testConnectionBtn.disabled = true;
  
  try {
    const response = await fetch(testEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${testApiKey}`,
      },
      body: JSON.stringify({
        model: testModel,
        messages: [{ role: 'user', content: '测试连接' }],
        max_tokens: 10
      })
    });
    
    if (response.ok) {
      alert('连接测试成功！');
    } else {
      alert(`连接测试失败: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    alert(`连接测试失败: ${error.message}`);
  } finally {
    testConnectionBtn.textContent = '测试连接';
    testConnectionBtn.disabled = false;
  }
});

renderScenario();
