import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Users, Share2, Copy } from 'lucide-react';

interface ReferralWidgetProps {
  mode?: 'full' | 'compact' | 'header';
}

export default function ReferralWidget({ mode = 'full' }: ReferralWidgetProps) {
  const [copied, setCopied] = React.useState(false);
  
  const referralCode = 'ALU-ABC123';
  const referralStats = {
    totalReferrals: 3,
    activatedReferrals: 2,
    benefitMonths: 13,
    daysRemaining: 425
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Únete a Asistentes IA',
        text: `Usa mi código de referido: ${referralCode}`,
        url: `${window.location.origin}?ref=${referralCode}`
      });
    } else {
      handleCopy();
    }
  };

  if (mode === 'compact') {
    return (
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Programa de Referidos</h3>
            <p className="text-sm text-gray-600">Invita amigos y gana beneficios</p>
          </div>
          <Button size="sm" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Compartir
          </Button>
        </div>
      </div>
    );
  }

  if (mode === 'header') {
    return (
      <div className="flex items-center space-x-4">
        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
          <Gift className="w-3 h-3 mr-1" />
          {referralStats.benefitMonths} meses gratis
        </Badge>
        <Button variant="ghost" size="sm" onClick={handleShare}>
          Referir amigos
        </Button>
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center text-2xl">
              <Gift className="w-6 h-6 mr-2 text-purple-600" />
              Programa de Referidos
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Invita a tus amigos y gana hasta 12 meses gratis
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-purple-600">
              {referralStats.benefitMonths}
            </div>
            <div className="text-sm text-gray-600">meses gratis</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {referralStats.totalReferrals}
            </div>
            <div className="text-sm text-gray-600">Referidos totales</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {referralStats.activatedReferrals}
            </div>
            <div className="text-sm text-gray-600">Activados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {referralStats.benefitMonths}
            </div>
            <div className="text-sm text-gray-600">Meses gratis</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {referralStats.daysRemaining}
            </div>
            <div className="text-sm text-gray-600">Días restantes</div>
          </div>
        </div>

        {/* Referral Code */}
        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Tu código de referido
              </label>
              <div className="text-2xl font-mono font-bold text-gray-900 mt-1">
                {referralCode}
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className={copied ? 'bg-green-50 text-green-700' : ''}
              >
                <Copy className="w-4 h-4 mr-2" />
                {copied ? 'Copiado' : 'Copiar'}
              </Button>
              <Button size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg p-4 border">
          <h4 className="font-semibold text-gray-900 mb-3">Beneficios por referido:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Alumno → Academia</span>
              <Badge className="bg-gold-100 text-gold-800">12 meses gratis</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Alumno → Alumno</span>
              <Badge variant="secondary">1 mes gratis</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Academia → Alumno</span>
              <Badge variant="secondary">2 meses gratis</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}