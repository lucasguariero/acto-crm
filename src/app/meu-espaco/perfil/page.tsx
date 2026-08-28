"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Envelope,
  Phone,
  MapPin,
  BuildingOffice,
  Briefcase,
  Calendar,
  CaretLeft,
  Camera,
} from "@phosphor-icons/react";

export default function PerfilPage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: collapsed ? '72px' : '260px' }}
      >
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Meu Perfil</h1>
            <p className="text-sm text-gray-500 mt-1">
              Gerencie suas informações pessoais e configurações de conta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Profile Card */}
            <Card className="lg:col-span-1 border-gray-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-3xl font-semibold">
                      AS
                    </div>
                    <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                      <Camera size={14} />
                    </button>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-gray-900">Admin Sistema</h2>
                  <p className="text-sm text-gray-500">Administrador</p>
                  <Badge variant="secondary" className="mt-2">
                    Ativo
                  </Badge>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Envelope size={18} className="text-gray-400" />
                    <span>admin@acto.com.br</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone size={18} className="text-gray-400" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <BuildingOffice size={18} className="text-gray-400" />
                    <span>ACTO Soluções</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button variant="outline" className="w-full">
                    Alterar Senha
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Profile Form */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="dados-pessoais" className="w-full">
                <TabsList className="mb-4 bg-white border border-gray-200 h-auto p-1 gap-1">
                  <TabsTrigger
                    value="dados-pessoais"
                    className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white"
                  >
                    Dados Pessoais
                  </TabsTrigger>
                  <TabsTrigger
                    value="configuracoes"
                    className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white"
                  >
                    Configurações
                  </TabsTrigger>
                  <TabsTrigger
                    value="seguranca"
                    className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white"
                  >
                    Segurança
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="dados-pessoais">
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Informações Pessoais</CardTitle>
                      <CardDescription>
                        Atualize suas informações pessoais
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Nome Completo
                          </label>
                          <Input defaultValue="Admin Sistema" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            CPF
                          </label>
                          <Input defaultValue="123.456.789-00" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            E-mail
                          </label>
                          <Input defaultValue="admin@acto.com.br" type="email" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Telefone
                          </label>
                          <Input defaultValue="(11) 99999-9999" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Data de Nascimento
                          </label>
                          <Input defaultValue="01/01/1990" type="date" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Gênero
                          </label>
                          <Select defaultValue="masculino">
                            <SelectTrigger className="h-9">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="masculino">Masculino</SelectItem>
                              <SelectItem value="feminino">Feminino</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                              <SelectItem value="nao-informar">Prefiro não informar</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-4 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Endereço</CardTitle>
                      <CardDescription>
                        Atualize seu endereço de correspondência
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-medium text-gray-700">
                            Endereço
                          </label>
                          <Input defaultValue="Av. Paulista, 1000" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Número
                          </label>
                          <Input defaultValue="1000" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Complemento
                          </label>
                          <Input defaultValue="Andar 10" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Bairro
                          </label>
                          <Input defaultValue="Bela Vista" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            CEP
                          </label>
                          <Input defaultValue="01310-100" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Cidade
                          </label>
                          <Input defaultValue="São Paulo" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Estado
                          </label>
                          <Select defaultValue="sp">
                            <SelectTrigger className="h-9">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sp">São Paulo</SelectItem>
                              <SelectItem value="rj">Rio de Janeiro</SelectItem>
                              <SelectItem value="mg">Minas Gerais</SelectItem>
                              <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                      Salvar Alterações
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="configuracoes">
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Configurações de Conta</CardTitle>
                      <CardDescription>
                        Gerencie suas preferências
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Notificações por E-mail</h4>
                          <p className="text-sm text-gray-500">Receba notificações sobre suas atividades</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Notificações Push</h4>
                          <p className="text-sm text-gray-500">Receba notificações no navegador</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Tema Escuro</h4>
                          <p className="text-sm text-gray-500">Ative o modo escuro da interface</p>
                        </div>
                        <input type="checkbox" className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Modo Economy</h4>
                          <p className="text-sm text-gray-500">Reduza o consumo de dados</p>
                        </div>
                        <input type="checkbox" className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                      Salvar Preferências
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="seguranca">
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Segurança da Conta</CardTitle>
                      <CardDescription>
                        Gerencie a segurança da sua conta
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-[#2563EB] flex items-center justify-center">
                            <User size={20} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Autenticação em Dois Fatores</h4>
                            <p className="text-sm text-gray-500">Adicione uma camada extra de segurança</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3 bg-white">
                          Ativar 2FA
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Senha Atual
                          </label>
                          <Input type="password" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Nova Senha
                          </label>
                          <Input type="password" className="h-9" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Confirmar Nova Senha
                          </label>
                          <Input type="password" className="h-9" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                      Alterar Senha
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

